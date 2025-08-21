from flask import Flask, render_template, request, redirect, url_for, session, flash
import smtplib, ssl
from email.mime.text import MIMEText

app = Flask(__name__)
app.secret_key = "handsomeman"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('index.html')

@app.route('/system')
def system():
    return render_template('attendancesys.html')

@app.route('/contact', methods=['POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")

        msg = MIMEText(f"Name: {name}\nEmail: {email}\nMessage: {message}")
        msg['Subject'] = 'Contact Form Submission'
        msg['From'] = email
        msg['To'] = "genesissamson04@gmail.com"

        context = ssl.create_default_context()

        if not name.replace(" ", "").isalpha():
            flash("Name should only contain letters!", "danger")
            return redirect(url_for("home") + "#contact")
        
        if not name or not email or not message:
            flash("All fields are required!", "danger")
            return redirect(url_for("home") + "#contact")
        if not email.endswith("@gmail.com"):
            flash("Please use a Gmail address!", "danger")
            return redirect(url_for("home") + "#contact")
        else:
            try:
                with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as server:
                    # server.starttls()
                    server.login("genesissamson04@gmail.com", "xfir bjra fotf lrnt")

                    server.sendmail(email, "genesissamson04@gmail.com", msg.as_string())
                    server.quit()
                    flash("Message sent successfully!", "success")
                    return redirect(url_for("home") + "#contact")
            except Exception as e:
                    print(f"Error sending email: {e}")
                    return render_template('errorchec.html', success=False, error=str(e))
            # Here you would typically handle the form submission, e.g., save to a database or send an email
            return render_template('index.html', success=True, name=name)
    return render_template('index.html', success=False, error=None)


if __name__ == '__main__':
    app.run(debug=True)