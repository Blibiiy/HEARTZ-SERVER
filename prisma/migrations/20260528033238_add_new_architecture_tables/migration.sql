/*
  Warnings:

  - You are about to drop the column `affirmation` on the `practice_sessions` table. All the data in the column will be lost.
  - You are about to drop the column `predictedSyllable` on the `practice_sessions` table. All the data in the column will be lost.
  - You are about to drop the column `targetSyllable` on the `practice_sessions` table. All the data in the column will be lost.
  - You are about to drop the column `waveformMetrics` on the `practice_sessions` table. All the data in the column will be lost.
  - Added the required column `targetSyllableId` to the `practice_sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "practice_sessions" DROP COLUMN "affirmation",
DROP COLUMN "predictedSyllable",
DROP COLUMN "targetSyllable",
DROP COLUMN "waveformMetrics",
ADD COLUMN     "audioFileId" TEXT,
ADD COLUMN     "targetSyllableId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Syllable";

-- CreateTable
CREATE TABLE "syllables" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "label" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "syllables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audio_files" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "s3Bucket" TEXT NOT NULL,
    "s3Key" TEXT NOT NULL,
    "s3Region" TEXT,
    "contentType" TEXT,
    "sizeBytes" INTEGER,
    "sampleRate" INTEGER,
    "channels" INTEGER,
    "bitsPerSample" INTEGER,
    "durationMs" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audio_files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "predictions" (
    "id" TEXT NOT NULL,
    "practiceSessionId" TEXT NOT NULL,
    "audioFileId" TEXT,
    "predictedSyllableId" TEXT NOT NULL,
    "waveformMetrics" JSONB,
    "affirmation" TEXT,
    "modelName" TEXT,
    "modelVersion" TEXT,
    "latencyMs" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "predictions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_sessions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "refreshTokenHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "ip" TEXT,
    "userAgent" TEXT,

    CONSTRAINT "auth_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weekly_summaries" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "weekStart" TIMESTAMP(3) NOT NULL,
    "totalPracticeCount" INTEGER NOT NULL,
    "overallAccuracy" DOUBLE PRECISION NOT NULL,
    "mostPracticedId" TEXT,
    "needsImprovementId" TEXT,
    "geminiWeeklyReport" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "weekly_summaries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "syllables_code_key" ON "syllables"("code");

-- CreateIndex
CREATE INDEX "audio_files_userId_createdAt_idx" ON "audio_files"("userId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "audio_files_s3Bucket_s3Key_key" ON "audio_files"("s3Bucket", "s3Key");

-- CreateIndex
CREATE UNIQUE INDEX "predictions_practiceSessionId_key" ON "predictions"("practiceSessionId");

-- CreateIndex
CREATE INDEX "predictions_predictedSyllableId_createdAt_idx" ON "predictions"("predictedSyllableId", "createdAt");

-- CreateIndex
CREATE INDEX "auth_sessions_userId_createdAt_idx" ON "auth_sessions"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "auth_sessions_userId_expiresAt_idx" ON "auth_sessions"("userId", "expiresAt");

-- CreateIndex
CREATE INDEX "weekly_summaries_weekStart_idx" ON "weekly_summaries"("weekStart");

-- CreateIndex
CREATE UNIQUE INDEX "weekly_summaries_userId_weekStart_key" ON "weekly_summaries"("userId", "weekStart");

-- CreateIndex
CREATE INDEX "practice_sessions_targetSyllableId_createdAt_idx" ON "practice_sessions"("targetSyllableId", "createdAt");

-- AddForeignKey
ALTER TABLE "audio_files" ADD CONSTRAINT "audio_files_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practice_sessions" ADD CONSTRAINT "practice_sessions_targetSyllableId_fkey" FOREIGN KEY ("targetSyllableId") REFERENCES "syllables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practice_sessions" ADD CONSTRAINT "practice_sessions_audioFileId_fkey" FOREIGN KEY ("audioFileId") REFERENCES "audio_files"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "predictions" ADD CONSTRAINT "predictions_practiceSessionId_fkey" FOREIGN KEY ("practiceSessionId") REFERENCES "practice_sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "predictions" ADD CONSTRAINT "predictions_audioFileId_fkey" FOREIGN KEY ("audioFileId") REFERENCES "audio_files"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "predictions" ADD CONSTRAINT "predictions_predictedSyllableId_fkey" FOREIGN KEY ("predictedSyllableId") REFERENCES "syllables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auth_sessions" ADD CONSTRAINT "auth_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weekly_summaries" ADD CONSTRAINT "weekly_summaries_mostPracticedId_fkey" FOREIGN KEY ("mostPracticedId") REFERENCES "syllables"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weekly_summaries" ADD CONSTRAINT "weekly_summaries_needsImprovementId_fkey" FOREIGN KEY ("needsImprovementId") REFERENCES "syllables"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weekly_summaries" ADD CONSTRAINT "weekly_summaries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
