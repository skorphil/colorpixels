import type Page from "@/classes/Page";

class Book {
  pages: Page[];
  constructor() {
    this.pages = [];
  }

  addPage(page: Page) {
    this.pages.push(page);
    console.log(`Page ${page} added to book`);
  }

  removePage(pageId: number) {
    this.pages = this.pages.filter((page) => page.id !== pageId);
  }

  getPages() {
    return this.pages;
  }
}

export default Book;
