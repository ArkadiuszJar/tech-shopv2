-- AlterTable
ALTER TABLE "Pc" ADD COLUMN     "cpu" TEXT,
ADD COLUMN     "gpu" TEXT,
ADD COLUMN     "prevPrice" INTEGER,
ADD COLUMN     "ram" INTEGER,
ADD COLUMN     "screen" INTEGER;

-- AlterTable
ALTER TABLE "Phones" ADD COLUMN     "cpu" TEXT,
ADD COLUMN     "ram" INTEGER,
ADD COLUMN     "screen" INTEGER;

-- AlterTable
ALTER TABLE "Tv" ADD COLUMN     "screen" INTEGER;
