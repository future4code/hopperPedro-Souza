import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create({
    id,
    title, 
    description, 
    duration_in_minutes, 
    year_of_release
  }: any): Promise<void> {
    await MovieDatabase.connection
      .insert({
        id,
        title, 
        description, 
        duration_in_minutes, 
        year_of_release
      })
      .into(MovieDatabase.TABLE_NAME);
  }

  async getAll(): Promise<any> {
    const result = await MovieDatabase.connection
      .select()
      .from(MovieDatabase.TABLE_NAME);

    return result
  }
}
