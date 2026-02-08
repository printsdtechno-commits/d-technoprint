import glob
import os

files = glob.glob('*.html')
print(f"Found files: {files}")

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print(f"Checking {file_path}, length: {len(content)}")
    if 'index.php' in content:
        print(f"Found index.php in {file_path}")
    
    new_content = content.replace('href="index.php"', 'href="index.html"')
    # ... other replacements ...
    # just testing index.php for now
    
    if content != new_content:
        print(f"Would update {file_path}")
    else:
        print(f"No changes needed for {file_path} (based on index.php check)")
