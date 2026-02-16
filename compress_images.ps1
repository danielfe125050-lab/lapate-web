Get-ChildItem -Path ".\public" -Include *.jpg, *.jpeg, *.png -Recurse | ForEach-Object {
    $inputFile = $_.FullName
    $outputFile = $_.FullName + "_temp"
    
    Write-Host "Compressing $inputFile..."
    
    # Resize to max width 1024px, maintain aspect ratio, quality 80
    ffmpeg -y -i "$inputFile" -vf "scale=1024:-1" -q:v 15 "$outputFile"
    
    if (Test-Path "$outputFile") {
        Move-Item -Path "$outputFile" -Destination "$inputFile" -Force
        Write-Host "Done."
    } else {
        Write-Host "Failed to compress $inputFile"
    }
}
