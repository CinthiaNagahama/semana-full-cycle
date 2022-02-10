import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) { }

  @Post()
  create(@Body() data: Prisma.TransactionCreateInput) {
    return this.transactionsService.create(data);
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }
}
