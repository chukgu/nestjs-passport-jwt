import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
// export class JwtAuthGuard extends AuthGuard(['strategy_jwt_1', 'strategy_jwt_2', '...']) { ... } //전략 여러 개 설정할 때(순차적으로 진행)
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext){
        return super.canActivate(context);
    }

    handleRequest(err: any, user: any, info: any){
        if(err || !user){
            throw err || new UnauthorizedException();
        }
        return user;
    }
}