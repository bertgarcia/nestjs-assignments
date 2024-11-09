import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AppController {
  @Get('prime/:n')
  getPrimeNumbers(@Param('n') n: string): { primes: number[] } {
    const limit = parseInt(n, 10);
    const primes = this.generatePrimes(limit);
    return { primes };
  }

  private generatePrimes(limit: number): number[] {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
      if (this.isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }

  private isPrime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}
