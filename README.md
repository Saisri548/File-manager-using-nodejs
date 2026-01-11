📁 Node.js File Manager (CLI Application)

A Command Line File Manager built using Core Node.js modules that allows users to perform basic file operations such as create, read, append, delete, rename, and list files.

This project is built without any frameworks to strengthen understanding of Node.js core concepts.

🚀 Features

📄 Create a file with content

📖 Read file content

➕ Append content to a file

🗑️ Delete a file

✏️ Rename a file

📂 List all files in the directory

🧠 Automatically adds .txt extension if not provided

⚡ Uses async/await with promise-based filesystem APIs

🛠️ Tech Stack

Node.js

Core Modules Used:

fs/promises – file system operations

path – path handling

readline/promises – CLI input handling

📂 Project Structure
node-file-manager/
│
├── fileManager.js      # Main application file
├── nodeintro.txt       # Sample file created using the app
└── README.md           # Project documentation

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/node-file-manager.git

2️⃣ Navigate to project folder
cd node-file-manager

3️⃣ Run the application
node fileManager.js


✅ Make sure Node.js (v16+) is installed.

📌 Usage

After running the app, you’ll see a menu like this:

======= File Manager =======
1 - Create File
2 - Read File
3 - Append File
4 - Delete File
5 - Rename File
6 - List Files

Example: Create a File

Choose option 1

Enter filename: nodeintro

Enter content: (paste content)

The app will automatically create:

nodeintro.txt

🧠 Learning Outcomes

Through this project, you will understand:

How Node.js works without frameworks

Asynchronous programming using async/await

Difference between fs and fs/promises

Handling user input from command line

Building real-world CLI tools

Debugging common Node.js errors

📈 Future Improvements

Convert CLI to Express REST API

Add command-line flags (node app.js create file.txt)

Add JSON file support

Add error validation

Convert to Electron desktop app

🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

📜 License

This project is open-source and available under the MIT License.

⭐ Author

Saisri Thota
Learning Node.js | Backend Development | CLI Tools
