from flask import Flask, render_template, jsonify, url_for
import os

app = Flask(__name__)

files = os.listdir("static/images/")
files = ["images/" + file for file in files]

@app.route("/")
def main_page():
    return render_template("index.html", files=files)