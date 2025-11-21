---
layout: ../../layouts/Layout.astro
title: "Entenent els Transformers: Implementació des de zero"
date: "2023-11-21"
---

# Entenent els Transformers

Ahir vaig decidir no utilitzar `nn.Transformer` i fer-ho jo mateix...

## L'atenció escalada (Scaled Dot-Product Attention)

La fórmula clau és:

$$ 
Attention(Q, K, V) = softmax(\frac{QK^T}{\sqrt{d_k}})V 
$$

Aquí teniu el meu codi en PyTorch:

```python
def attention(q, k, v):
    # ... el teus snippets de codi
    pass