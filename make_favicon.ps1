Add-Type -AssemblyName System.Drawing
$srcPath = "E:\SchoolOS main web\public\logo.png"
$destPath = "E:\SchoolOS main web\public\favicon.png"

$srcImg = [System.Drawing.Image]::FromFile($srcPath)
$size = [math]::Max($srcImg.Width, $srcImg.Height)

$destImg = New-Object System.Drawing.Bitmap($size, $size)
$graphics = [System.Drawing.Graphics]::FromImage($destImg)
$graphics.Clear([System.Drawing.Color]::White)

$x = [math]::Truncate(($size - $srcImg.Width) / 2)
$y = [math]::Truncate(($size - $srcImg.Height) / 2)
$graphics.DrawImage($srcImg, $x, $y, $srcImg.Width, $srcImg.Height)

$destImg.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$graphics.Dispose()
$srcImg.Dispose()
$destImg.Dispose()
