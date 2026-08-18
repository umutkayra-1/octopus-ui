#!/usr/bin/env python3
"""
FTP deploy for Octopus UI — uploads dist/ to cPanel public_html.
Run: npm run build && python3 deploy.py

Credentials: set these environment variables or edit below.
  FTP_HOST, FTP_USER, FTP_PASS
"""

import ftplib
import os
import sys

HOST = os.environ.get("FTP_HOST", "")
USER = os.environ.get("FTP_USER", "")
PASS = os.environ.get("FTP_PASS", "")
REMOTE_DIR = "/public_html"
LOCAL_DIR = "dist"

if not HOST or not USER or not PASS:
    print("Set FTP_HOST, FTP_USER, FTP_PASS environment variables.")
    print("Example:")
    print('  FTP_HOST=cpcloud.keyubu.net FTP_USER=myuser FTP_PASS=mypass python3 deploy.py')
    sys.exit(1)

def upload_dir(ftp, local, remote):
    for item in os.listdir(local):
        local_path = os.path.join(local, item)
        remote_path = f"{remote}/{item}"
        if os.path.isdir(local_path):
            try:
                ftp.mkd(remote_path)
            except ftplib.error_perm:
                pass
            upload_dir(ftp, local_path, remote_path)
        else:
            with open(local_path, "rb") as f:
                print(f"  {remote_path}")
                ftp.storbinary(f"STOR {remote_path}", f)

if not os.path.isdir(LOCAL_DIR):
    print(f"Error: {LOCAL_DIR}/ not found. Run 'npm run build' first.")
    sys.exit(1)

print(f"Connecting to {HOST}...")
ftp = ftplib.FTP(HOST)
ftp.login(USER, PASS)
print(f"Uploading {LOCAL_DIR}/ -> {REMOTE_DIR}/")
upload_dir(ftp, LOCAL_DIR, REMOTE_DIR)
ftp.quit()
print("Deploy complete.")
