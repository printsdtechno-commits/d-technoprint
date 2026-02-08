import glob

files = ['index.html']

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Target string with mt-3 and margin-top: 50px
    # Based on Read output: <a class="btn btn-light btn-sm mt-3" href="..." style="... margin-top: 50px;">
    # I'll use regex or flexible replace if possible, but exact match is safer if I copy from Read output.
    # The read output line 200 matches the pattern.
    
    # Let's try to remove mt-3 from any button that has margin-top: 50px in style
    
    new_content = content.replace('class="btn btn-light btn-sm mt-3"', 'class="btn btn-light btn-sm"')
    
    if content != new_content:
        print(f"Updating {file_path}")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
    else:
        print(f"No changes in {file_path}")
