
class FileUpload {
    constructor(page) {
        this.page = page;
        this.browse = page.locator("#singleUploadBrowseLabel");
        this.fileInput = page.locator("#singleFileInput");
        this.uploadButton = page.getByTestId("single-upload-btn");
    }

    async goto() {
        await this.page.goto('/');
    }

    async uploadFile(filePath) {
        await this.browse.click();
        await this.fileInput.setInputFiles(filePath);
        await this.uploadButton.click();
    }
}

module.exports = FileUpload;
