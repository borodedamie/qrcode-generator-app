from flask import Flask, render_template, request, redirect, url_for
import qrcode, os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home/index.html')

@app.route('/generate-code', methods=[ 'GET', 'POST' ])
def generate_qr_code():
    if request.method == 'POST':
        link = request.form.get('link')
        
        img = qrcode.make(link)
        img.save("static/upload/qr_code.png")
        os.system("open /static/upload/qr_code.png")
        
        return redirect ( url_for('index') )

if __name__ == '__main__':
    app.run(debug = True)