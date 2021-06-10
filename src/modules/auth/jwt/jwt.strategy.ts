import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { ConfigService } from '@nestjs/config';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { AuthService } from '../auth.service';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly moduleRef: ModuleRef,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
      secretOrKey: configService.get('JWT_TOKEN_KEY'),
    });
  }

  async validate(request: Request, jwtPayload) {
    console.log({ req: request.params });
    console.log({ jwtPayload });
    // Todo:: talk to Brian
    // const contextId = ContextIdFactory.getByRequest(request);

    // const authService: AuthService = await this.moduleRef.resolve(
    //   AuthService,
    //   contextId,
    // );

    // const user = await authService.getUser(jwtPayload.id);

    // if (!user) {
    //   throw new UnauthorizedException();
    // }

    // return user;
    return jwtPayload;
  }
}
