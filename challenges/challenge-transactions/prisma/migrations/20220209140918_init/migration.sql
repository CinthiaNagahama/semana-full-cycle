-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "account_id" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL
);
