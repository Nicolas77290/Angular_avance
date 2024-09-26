export interface StatDto {
  year: number;
  month: number;
  nb_success: number;
  nb_fail: number;
}

export const createStatMock = (): StatDto => ({
    year: Math.floor(Math.random() * (2023 - 1990 + 1)) + 1990,
    month: Math.floor(Math.random() * 12) + 1,
    nb_success: Math.floor(Math.random() * 100),
    nb_fail: Math.floor(Math.random() * 100),
  }
);
  