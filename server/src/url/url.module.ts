import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UrlModuleBase } from "./base/url.module.base";
import { UrlService } from "./url.service";
import { UrlController } from "./url.controller";

@Module({
  imports: [UrlModuleBase, forwardRef(() => AuthModule)],
  controllers: [UrlController],
  providers: [UrlService],
  exports: [UrlService],
})
export class UrlModule {}
