from flask import Flask, request, jsonify
import re

app = Flask(__name__)

# Red flag rules
RED_FLAGS = {
    "gmail.com": "Uses personal email",
    "registration fee": "Asks for money",
    "pay to apply": "Application fee required",
    "earn ₹50000": "Unrealistic pay",
    "telegram": "No official platform",
    "no website": "No online presence"
}

@app.route("/check_internship", methods=["POST"])
def check_internship():
    data = request.get_json()
    desc = data.get("description", "").lower()
    detected_flags = []

    for keyword, reason in RED_FLAGS.items():
        if keyword in desc:
            detected_flags.append(reason)

    # Dynamic trust score
    score = max(100 - len(detected_flags) * 20, 0)

    verdict = "Safe" if score >= 80 else "Risky" if score <= 50 else "Caution"

    return jsonify({
        "trust_score": score,
        "verdict": verdict,
        "red_flags": detected_flags
    })

if __name__ == "__main__":
    app.run(debug=True)
    
