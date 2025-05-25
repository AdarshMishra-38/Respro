import sys
import pickle

with open('ml-model/clas.pkl', 'rb') as file:
    classifier = pickle.load(file)
with open('ml-model/vecti.pkl', 'rb') as file:
    vectorizer = pickle.load(file)

def get_category_label(prediction):
    category_map = {
        1: "Data Science Engineer",
        2: "HR",
        3: "Advocate",
        4: "Arts",
        5: "Web Developer",
        6: "Mechanical Engineer",
        7: "Sales",
        8: "Health And Fitness",
        9: "Civil Engineer",
        10: "Java Developer",
        11: "Business Analyst",
        12: "SAP",
        14: "Electrical Engineer"
    }
    return category_map.get(prediction, "Unknown Category")

def predict_category(text):
    text_tfidf = vectorizer.transform([text])
    prediction = classifier.predict(text_tfidf)
    return get_category_label(prediction[0])

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Error: No resume text provided")
        sys.exit(1)
    
    resume_text = sys.argv[1]
    category = predict_category(resume_text)
    print(category)