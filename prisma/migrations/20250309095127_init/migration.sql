-- CreateTable
CREATE TABLE "continent_master" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "alias_name" TEXT[],
    "remove" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "continent_master_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "continent_master_code_key" ON "continent_master"("code");
