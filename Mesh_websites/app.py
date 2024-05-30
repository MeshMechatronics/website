from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    language = request.args.get('lang', 'tr')
    return render_template('index.html', lang=language)

@app.route('/<lang>')
def change_language(lang):
    return redirect(url_for('home', lang=lang))

# Diğer rotalar için de benzer şekilde dil parametresini geçebilirsiniz.
@app.route('/about')
def about():
    language = request.args.get('lang', 'tr')
    return render_template('about.html', lang=language)

@app.route('/services')
def services():
    language = request.args.get('lang', 'tr')
    return render_template('services.html', lang=language)

@app.route('/contact')
def contact():
    language = request.args.get('lang', 'tr')
    return render_template('contact.html', lang=language)

@app.route('/projects')
def projects():
    language = request.args.get('lang', 'tr')
    return render_template('projects.html', lang=language)

if __name__ == '__main__':
    app.run(debug=True)
