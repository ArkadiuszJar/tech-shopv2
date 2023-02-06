/*
  Warnings:

  - Added the required column `producent` to the `Accessories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `producent` to the `Audio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `producent` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `producent` to the `Gaming` table without a default value. This is not possible if the table is not empty.
  - Added the required column `producent` to the `Pc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `producent` to the `Phones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `producent` to the `Tv` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Accessories" ADD COLUMN     "producent" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Audio" ADD COLUMN     "producent" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "producent" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Gaming" ADD COLUMN     "producent" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pc" ADD COLUMN     "producent" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Phones" ADD COLUMN     "producent" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tv" ADD COLUMN     "producent" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Smarthome" (
    "id" TEXT NOT NULL,
    "producent" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Smarthome_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Smarthome_id_key" ON "Smarthome"("id");
