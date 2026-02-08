import glob

files = ['services.php']

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Target string
    old_str = 'class="btn btn-light btn-sm mt-3" href="https://wa.me/971545741959" target="_blank" rel="noopener" style="color: var(--brand); font-weight: 600;"'
    new_str = 'class="btn btn-light btn-sm" href="https://wa.me/971545741959" target="_blank" rel="noopener" style="color: var(--brand); font-weight: 600; margin-top: 50px;"'
    
    new_content = content.replace(old_str, new_str)
    
    if content != new_content:
        print(f"Updating {file_path}")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
    else:
        print(f"No changes in {file_path} - Pattern not found?")
