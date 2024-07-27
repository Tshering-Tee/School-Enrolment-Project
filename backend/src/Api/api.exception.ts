import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { Response } from 'express';
import { STATUS_CODES } from 'http';
import { Prisma } from '@prisma/client';
import { BaseExceptionFilter } from '@nestjs/core';
import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponseModel {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  error: string;
  @ApiProperty()
  messages: string[];
}

@Catch()
@Injectable()
export class ApiExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    console.log(exception);
    if (exception instanceof HttpException) {
      new BadRequestFilter().catch(exception, host);
    } else if (exception instanceof PrismaClientExceptionFilter) {
      new PrismaClientExceptionFilter().catch(exception, host);
    } else {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();

      const errorResponse = new ErrorResponseModel();
      errorResponse.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

      if (exception instanceof Error) {
        if (errorResponse.messages) {
          errorResponse.messages = ['Looks like something went wrong'];
        }
      } else {
        errorResponse.statusCode = errorResponse.statusCode;
        errorResponse.messages = exception.message;
      }

      errorResponse.error = STATUS_CODES[errorResponse.statusCode];

      response.status(errorResponse.statusCode).json(errorResponse);
    }
  }
}

@Catch(BadRequestException, ValidationError)
export class BadRequestFilter implements ExceptionFilter {
  constructor() {}
  catch(exception: HttpException, host: ArgumentsHost) {
    if (exception instanceof BadRequestException) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const r = exception.getResponse() as any;

      const validationErrors = r.message as any[];
      const statusCode = 400;
      console.log(validationErrors);
      response.status(statusCode).json({
        statusCode: statusCode,
        error: STATUS_CODES[statusCode],
        messages: validationErrors?.map((x) => {
          return x;
        }),
      });
    } else {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const errorMessage = exception.message;

      response.status(exception.getStatus()).json({
        statusCode: exception.getStatus(),
        error: exception.getStatus(),
        messages: [errorMessage],
      });
    }
  }
}

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.error(exception.message);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');
    const status = HttpStatus.CONFLICT;
    response.status(status).json({
      statusCode: status,
      error: STATUS_CODES[status],
      messages: [message],
    });
  }
}