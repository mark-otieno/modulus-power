from PIL import Image, ImageDraw, ImageFont

S = 4
image = Image.new("RGBA", (1200 * S, 300 * S), (0, 0, 0, 0))
draw = ImageDraw.Draw(image)
ink = (20, 36, 31, 255)

# Three rising bars and the baseline reproduce the website's power mark.
base_x, base_y = 90 * S, 205 * S
draw.line((base_x, base_y, 206 * S, base_y), fill=ink, width=8 * S)
for x, height in ((111, 42), (145, 70), (179, 98)):
    # Slightly slanted bars echo the CSS logo.
    draw.polygon(((x * S, base_y), ((x + 14) * S, base_y), ((x + 14 + 17) * S, (base_y - height * S)), ((x + 17) * S, (base_y - height * S))), fill=ink)

font_bold = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 49 * S)
font_regular = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 28 * S)
draw.text((250 * S, 91 * S), "MODULUS", fill=ink, font=font_bold)
draw.text((253 * S, 161 * S), "POWER & ELECTRICAL", fill=ink, font=font_regular)

image.resize((1200, 300), Image.Resampling.LANCZOS).save("logo.png")
