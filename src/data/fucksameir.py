import sqlite3
import json
import os

def convert_db_to_json(db_path, json_path=None):
    """
    تحويل قاعدة بيانات SQLite إلى ملف JSON.
    
    المدخلات:
        db_path: مسار ملف قاعدة البيانات
        json_path: مسار ملف JSON المراد إنشاؤه (اختياري)
    
    المخرجات:
        يقوم بإنشاء ملف JSON يحتوي على كل البيانات من قاعدة البيانات
    """
    # إذا لم يتم تحديد مسار ملف JSON، استخدم نفس اسم ملف قاعدة البيانات مع امتداد .json
    if json_path is None:
        json_path = os.path.splitext(db_path)[0] + '.json'
    
    # الاتصال بقاعدة البيانات
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row  # للحصول على الصفوف كقواميس
    cursor = conn.cursor()
    
    # الحصول على قائمة بجميع الجداول في قاعدة البيانات
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = cursor.fetchall()
    
    # إنشاء قاموس لتخزين كل البيانات
    database_dict = {}
    
    # الحصول على البيانات من كل جدول
    for table_row in tables:
        table_name = table_row[0]
        
        # تخطي جداول النظام
        if table_name.startswith('sqlite_'):
            continue
        
        # الحصول على البيانات من الجدول
        cursor.execute(f"SELECT * FROM {table_name}")
        rows = cursor.fetchall()
        
        # تحويل البيانات إلى قائمة من القواميس
        table_data = []
        for row in rows:
            row_dict = {key: row[key] for key in row.keys()}
            table_data.append(row_dict)
        
        database_dict[table_name] = table_data
    
    # إغلاق الاتصال بقاعدة البيانات
    conn.close()
    
    # كتابة البيانات إلى ملف JSON
    with open(json_path, 'w', encoding='utf-8') as json_file:
        json.dump(database_dict, json_file, ensure_ascii=False, indent=4)
    
    print(f"تم تحويل قاعدة البيانات بنجاح إلى {json_path}")
    return json_path

if __name__ == "__main__":
    # استخدام raw string لتجنب مشكلة الـ escape characters
    db_file_path = r"C:\Users\nevoo\Downloads\dataBase.db"
    convert_db_to_json(db_file_path)