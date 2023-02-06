/*
  Warnings:

  - The primary key for the `Accessories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Accessories` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Audio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Audio` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Cart` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Cart` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Gaming` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Gaming` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Pc` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Pc` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Phones` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Phones` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Smarthome` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Smarthome` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tv` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Tv` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "Accessories_id_key";

-- DropIndex
DROP INDEX "Audio_id_key";

-- DropIndex
DROP INDEX "Cart_id_key";

-- DropIndex
DROP INDEX "Gaming_id_key";

-- DropIndex
DROP INDEX "Pc_id_key";

-- DropIndex
DROP INDEX "Phones_id_key";

-- DropIndex
DROP INDEX "Smarthome_id_key";

-- DropIndex
DROP INDEX "Tv_id_key";

-- AlterTable
ALTER TABLE "Accessories" DROP CONSTRAINT "Accessories_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Accessories_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Audio" DROP CONSTRAINT "Audio_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Audio_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Cart_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Gaming" DROP CONSTRAINT "Gaming_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Gaming_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Pc" DROP CONSTRAINT "Pc_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Pc_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Phones" DROP CONSTRAINT "Phones_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Phones_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Smarthome" DROP CONSTRAINT "Smarthome_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Smarthome_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Tv" DROP CONSTRAINT "Tv_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Tv_pkey" PRIMARY KEY ("id");
