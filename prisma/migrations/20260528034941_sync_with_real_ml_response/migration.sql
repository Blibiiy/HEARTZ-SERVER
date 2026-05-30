/*
  Warnings:

  - You are about to drop the column `latencyMs` on the `predictions` table. All the data in the column will be lost.
  - You are about to drop the column `modelName` on the `predictions` table. All the data in the column will be lost.
  - You are about to drop the column `modelVersion` on the `predictions` table. All the data in the column will be lost.
  - You are about to drop the column `waveformMetrics` on the `predictions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "predictions" DROP COLUMN "latencyMs",
DROP COLUMN "modelName",
DROP COLUMN "modelVersion",
DROP COLUMN "waveformMetrics";
