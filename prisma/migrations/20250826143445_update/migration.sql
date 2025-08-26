/*
  Warnings:

  - A unique constraint covering the columns `[shortUrl]` on the table `shortener` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "shortener_shortUrl_key" ON "public"."shortener"("shortUrl");
