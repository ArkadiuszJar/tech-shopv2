-- AlterTable
ALTER TABLE "Audio" ADD COLUMN     "anc" TEXT,
ADD COLUMN     "comunication" TEXT,
ADD COLUMN     "microphone" TEXT;

-- AlterTable
ALTER TABLE "Gaming" ADD COLUMN     "cpu" TEXT,
ADD COLUMN     "disc" TEXT,
ADD COLUMN     "ram" INTEGER,
ADD COLUMN     "type" TEXT;
