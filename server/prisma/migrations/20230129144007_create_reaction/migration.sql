-- CreateTable
CREATE TABLE "emoji" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "reaction" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
