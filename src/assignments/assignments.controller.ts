import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('factorial/:number')
  calculateFactorial(@Param('number', ParseIntPipe) number: number): { result: number } {
    const result = this.factorial(number);
    return { result };
  }

  private factorial(n: number): number {
    if (n < 0) {
      throw new Error('Factorial is not defined for negative numbers.');
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }
}
