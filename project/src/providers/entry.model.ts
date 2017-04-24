export class EntryModel {
  title: string;
  subTitle: string;
  description: string;

  constructor(
    title?: string,
    subTitle?: string,
    description?: string
  ) {
    this.title = title || '';
    this.subTitle = subTitle || '';
    this.description = description || '';
  }
}
