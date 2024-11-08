import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('fibonacci/:n')
  getFibonacciSequence(@Param('n') n: number): { sequence: number[] } {
    // Convert `n` to an integer
    const num = parseInt(n.toString(), 10);
    
    // Initialize the Fibonacci sequence array
    const sequence = [];

    // Calculate Fibonacci sequence
    let a = 0, b = 1;
    for (let i = 0; i < num; i++) {
      sequence.push(a);
      [a, b] = [b, a + b];  // Update a and b to the next two Fibonacci numbers
    }

    // Return the Fibonacci sequence as a JSON response
    return { sequence };
  }
}
