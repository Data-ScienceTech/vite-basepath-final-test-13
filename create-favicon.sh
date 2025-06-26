# Data Science Tech Favicon Creation Script
# This creates a simple Data Science Tech favicon

# For now, we'll create an HTML file that can be opened in a browser to manually create the favicon
# You can use online favicon generators or tools to convert the SVG to ICO format

echo "Creating Data Science Tech favicon..."

# Create a simple HTML preview for the favicon
cat > public/favicon-preview.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>Data Science Tech Favicon Preview</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            padding: 50px; 
            background: #f5f5f5; 
        }
        .preview { 
            background: white; 
            padding: 20px; 
            border-radius: 8px; 
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            text-align: center;
        }
        .favicon-large { 
            width: 128px; 
            height: 128px; 
            margin: 20px;
            border: 1px solid #ddd;
        }
        .favicon-small { 
            width: 32px; 
            height: 32px; 
            margin: 10px;
            border: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="preview">
        <h1>Data Science Tech Favicon</h1>
        <p>Preview of the favicon at different sizes:</p>
        
        <h3>Large (128px)</h3>
        <img src="favicon.svg" class="favicon-large" alt="DS Favicon Large">
        
        <h3>Standard (32px)</h3>
        <img src="favicon.svg" class="favicon-small" alt="DS Favicon Small">
        
        <h3>Instructions:</h3>
        <ol style="text-align: left; max-width: 600px; margin: 0 auto;">
            <li>This SVG favicon should work in modern browsers</li>
            <li>For broader compatibility, convert the SVG to ICO format using tools like:</li>
            <ul>
                <li><a href="https://favicon.io/favicon-converter/" target="_blank">favicon.io</a></li>
                <li><a href="https://convertio.co/svg-ico/" target="_blank">convertio.co</a></li>
                <li><a href="https://cloudconvert.com/svg-to-ico" target="_blank">cloudconvert.com</a></li>
            </ul>
            <li>Replace the current favicon.ico with the generated file</li>
        </ol>
    </div>
</body>
</html>
EOF

echo "Favicon preview created at public/favicon-preview.html"
echo "SVG favicon created at public/favicon.svg"
echo "To complete the setup:"
echo "1. Open public/favicon-preview.html in your browser"
echo "2. Use an online converter to create favicon.ico from the SVG"
echo "3. Replace the existing favicon.ico file"
