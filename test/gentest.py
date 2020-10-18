import json
data = {}
for b in range(15):
    data[f'cat{b}'] = {}
    for a in range(100):
        data[f'cat{b}'][f'cat{b} // Test{a}'] = f'Testc{a}'
with open('test.json','w') as f:
    f.write(json.dumps(data))