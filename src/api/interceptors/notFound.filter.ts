import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, NotFoundException } from "@nestjs/common";
import { Request, Response } from 'express';


@Catch(NotFoundException)
export class NotFoundFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const statusCode = HttpStatus.NOT_FOUND;

    response
      .status(statusCode)
      .json({
        statusCode: statusCode,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.message || 'Resource not found',
      });
  }
}
