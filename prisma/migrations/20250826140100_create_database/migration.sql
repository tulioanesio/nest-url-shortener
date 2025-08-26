-- CreateTable
CREATE TABLE "public"."shortener" (
    "id" SERIAL NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "shortener_pkey" PRIMARY KEY ("id")
);
