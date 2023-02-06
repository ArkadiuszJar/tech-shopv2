-- CreateTable
CREATE TABLE "Pc" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Pc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phones" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Phones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gaming" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Gaming_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Audio" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Audio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tv" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Tv_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Accessories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Accessories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pc_id_key" ON "Pc"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Phones_id_key" ON "Phones"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Gaming_id_key" ON "Gaming"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Audio_id_key" ON "Audio"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tv_id_key" ON "Tv"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Accessories_id_key" ON "Accessories"("id");
