import json
data = {}
for a in range(1000):
    data[f'Test{a}'] = f'Testc{a}'
with open('test.json','w') as f:
    f.write(json.dumps(data))