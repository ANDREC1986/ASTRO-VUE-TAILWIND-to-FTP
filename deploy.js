import ftp from "basic-ftp";
import dotenv from "dotenv";
import fs from "fs-extra";

dotenv.config();

const client = new ftp.Client();
client.ftp.verbose = true;

async function deploy() {
    try {
        console.log("🔄 Conectando ao FTP...");
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASS,
            secure: false // Use true se a Hostinger exigir SFTP
        });

        console.log("🗑️ Limpando a pasta no servidor...");
        await client.clearWorkingDir();

        console.log("📤 Enviando arquivos...");
        await client.uploadFromDir("dist");

        console.log("✅ Deploy concluído!");
    } catch (error) {
        console.error("❌ Erro no deploy:", error);
    } finally {
        client.close();
    }
}

deploy();