
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import jwt from 'jsonwebtoken';

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
  constructor(
    private readonly configService: ConfigService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const request =
      context.switchToHttp().getRequest<Request>();

    // Get Authorization header
    const authHeader = request.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException(
        'No token provided',
      );
    }

    // Extract token
    const token = authHeader.substring(7).trim();

    if (!token) {
      throw new UnauthorizedException(
        'No token provided',
      );
    }

    // Get JWT secret
    const jwtSecret =
      this.configService.get<string>('SUPABASE_JWT');

    if (!jwtSecret) {
      throw new UnauthorizedException(
        'SUPABASE_JWT is not configured',
      );
    }

    try {
      // Verify JWT
      // Supabase legacy JWTs normally use HS256.
      const verifiedUser = jwt.verify(
        token,
        jwtSecret
      );

      // Store authenticated user on request
      request['user'] = verifiedUser;

      console.log(
        'Authenticated user:',
        verifiedUser,
      );

      return true;
    } catch (error) {
      console.error(
        'JWT verification failed:',
        error,
      );

      if (error instanceof jwt.TokenExpiredError) {
        throw new UnauthorizedException(
          'Token has expired',
        );
      }

      if (error instanceof jwt.JsonWebTokenError) {
        throw new UnauthorizedException(
          `Invalid token: ${error.message}`,
        );
      }

      throw new UnauthorizedException(
        'Authentication failed',
      );
    }
  }
}

