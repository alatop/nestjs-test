import 'joi-extract-type';
import * as joi from 'joi';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { JoiValidationPipe } from '../../pipes/validation.pipe';

enum MyType {
  FIRST = 'first',
  SECOND = 'second',
}

export const testGetParamsSchema = joi.object({
  type: joi.string().valid(MyType.FIRST, MyType.SECOND).required(),
});

export type TestGetParamsSchema = joi.extractType<typeof testGetParamsSchema>;

@Controller('test')
export class TestController {
  @Get()
  getHello(): string {
    return 'Test';
  }

  @Get('getid/:id')
  getUrlParam(@Param('id') id): string {
    return 'Test param:' + id;
  }

  @Get('queryparams/:id')
  getTestGetParams(
    @Param('id') id,
    @Query('type') type,
    @Query(new JoiValidationPipe(testGetParamsSchema)) //new JoiValidationPipe(testGetParamsSchema)
    query: TestGetParamsSchema,
  ): string {
    testGetParamsSchema.validate(query);
    console.log('-------------query', query);
    console.log('-------------valid', testGetParamsSchema.validate(query));
    return `Url param: ${id}, Get param type = ${type}`;
  }
}
