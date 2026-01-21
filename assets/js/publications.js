const publicationsData = {
    conference_papers: [
        {
            title: "Relational Neurosymbolic Markov Models",
            authors: [
                { name: "De Smet, L." },
                { name: "Venturato, G.", url: "https://gabventurato.github.io/" },
                { name: "De Raedt, L.", url: "https://wms.cs.kuleuven.be/people/lucderaedt/" },
                { name: "Marra, G.", url: "https://www.giuseppemarra.com/" }
            ],
            year: 2025,
            venue: "In Proceedings of the 39th Annual AAAI Conference on Artificial Intelligence.",
            links: [
                { name: "Paper", url: "https://arxiv.org/pdf/2412.13023", icon: "fa-regular fa-file-pdf" },
                { name: "Code", url: "https://github.com/ML-KULeuven/nesy-mm", icon: "fa-brands fa-github" }
            ]
        },
        {
            title: "A Fast Convoluted Story: Scaling Probabilistic Inference for Integer Arithmetic",
            authors: [
                { name: "De Smet, L." },
                { name: "Zuidberg Dos Martires, P.", url: "https://pedrozudo.github.io/" }
            ],
            year: 2024,
            venue: "In Proceedings of the 38th International Conference on Neural Information Processing Systems (NeurIPS).",
            links: [
                { name: "Paper", url: "https://proceedings.neurips.cc/paper_files/paper/2024/file/b9a17133e3943509243b5e197c1c23b2-Paper-Conference.pdf", icon: "fa-regular fa-file-pdf" },
                { name: "Media", url: "https://neurips.cc/virtual/2024/poster/95376", icon: "fa-regular fa-circle-play" },
                { name: "Code", url: "https://github.com/ML-KULeuven/probabilistic-arithmetic", icon: "fa-brands fa-github" }
            ]
        },
        {
            title: "EXPLAIN, AGREE, LEARN: Scaling Learning for Neural Probabilistic Logic",
            authors: [
                { name: "Verreet, V." },
                { name: "De Smet, L." },
                { name: "De Raedt, L.", url: "https://wms.cs.kuleuven.be/people/lucderaedt/" },
                { name: "Sansone, E.", url: "https://emsansone.github.io/" }
            ],
            year: 2024,
            venue: "In Proceedings of the 27th European Conference on Artificial Intelligence (ECAI).",
            links: [
                { name: "Paper", url: "https://arxiv.org/pdf/2408.08133", icon: "fa-regular fa-file-pdf" }
            ]
        },
        {
            title: "Differentiable Sampling of Categorical Distributions Using the CatLog-Derivative Trick",
            authors: [
                { name: "De Smet, L." },
                { name: "Sansone, E.", url: "https://emsansone.github.io/" },
                { name: "Zuidberg Dos Martires, P.", url: "https://pedrozudo.github.io/" }
            ],
            year: 2023,
            venue: "In Proceedings of the 37th International Conference on Neural Information Processing Systems (NeurIPS).",
            links: [
                { name: "Paper", url: "https://proceedings.neurips.cc/paper_files/paper/2023/file/61202bb341e7e0a6026ea134a5057abf-Paper-Conference.pdf", icon: "fa-regular fa-file-pdf" },
                { name: "Media", url: "https://neurips.cc/virtual/2023/poster/72541", icon: "fa-regular fa-circle-play" },
                { name: "Code", url: "https://github.com/ML-KULeuven/catlog", icon: "fa-brands fa-github" }
            ]
        },
        {
            title: "Neural Probilistic Logic Programming in Discrete-Continuous Domains",
            authors: [
                { name: "De Smet, L." },
                { name: "Zuidberg Dos Martires, P.", url: "https://pedrozudo.github.io/" },
                { name: "Manhaeve, R.", url: "https://people.cs.kuleuven.be/~robin.manhaeve/" },
                { name: "Marra, G.", url: "https://www.giuseppemarra.com/" },
                { name: "Kimmig, A.", url: "https://people.cs.kuleuven.be/~angelika.kimmig/" },
                { name: "De Raedt, L.", url: "https://wms.cs.kuleuven.be/people/lucderaedt/" }
            ],
            year: 2023,
            venue: "In Proceedings of the 39th Conference on Uncertainty in Artificial Intelligence (UAI).",
            links: [
                { name: "Paper", url: "https://proceedings.mlr.press/v216/de-smet23a/de-smet23a.pdf", icon: "fa-regular fa-file-pdf" },
                { name: "Video", url: "https://www.youtube.com/watch?v=eqWOMycQOk4&t=1s", icon: "fa-regular fa-circle-play" },
                { name: "Code", url: "https://github.com/ML-KULeuven/deepseaproblog", icon: "fa-brands fa-github" }
            ]
        }
    ],
    preprints: [
        {
            title: "The DeepLog Neurosymbolic Machine",
            authors: [
                { name: "Derkinderen, V.", url: "https://vincentderk.github.io/" },
                { name: "Manhaeve, R.", url: "https://people.cs.kuleuven.be/~robin.manhaeve/" },
                { name: "Adriaensen, R.", url: "https://www.kuleuven.be/wieiswie/en/person/00168703" },
                { name: "Van Praet, L.", url: "https://www.kuleuven.be/wieiswie/en/person/00160543" },
                { name: "De Smet, L." },
                { name: "Marra, G.", url: "https://www.giuseppemarra.com/" },
                { name: "De Raedt, L.", url: "https://wms.cs.kuleuven.be/people/lucderaedt/" }
            ],
            year: 2025,
            links: [
                { name: "Paper", url: "https://arxiv.org/abs/2508.13697", icon: "fa-regular fa-file-pdf" }
            ]
        },
        {
            title: "Defining neurosymbolic AI",
            authors: [
                { name: "De Smet, L." },
                { name: "De Raedt, L.", url: "https://wms.cs.kuleuven.be/people/lucderaedt/" }
            ],
            year: 2025,
            links: [
                { name: "Paper", url: "https://arxiv.org/abs/2507.11127", icon: "fa-regular fa-file-pdf" }
            ]
        }
    ],
    workshop_papers: [
        {
            title: "Neurosymbolic Markov Models",
            authors: [
                { name: "De Smet, L." },
                { name: "Venturato, G.", url: "https://gabventurato.github.io/" },
                { name: "Marra, G.", url: "https://www.giuseppemarra.com/" },
                { name: "De Raedt, L.", url: "https://wms.cs.kuleuven.be/people/lucderaedt/" }
            ],
            year: 2024,
            venue: "In the ICML 2024 Workshop on Structured Probabilistic Inference & Generative Modeling (SPIGM 2024).",
            links: [
                { name: "Paper", url: "https://openreview.net/pdf?id=epOXthx0ea", icon: "fa-regular fa-file-pdf" }
            ]
        },
        {
            title: "Inferring Missing CV Skills using PU Learning and Variational Inference",
            authors: [
                { name: "Verreet, V.", url: "https://www.kuleuven.be/wieiswie/nl/person/00118567" },
                { name: "De Smet, L." },
                { name: "Manhaeve, R.", url: "https://people.cs.kuleuven.be/~robin.manhaeve/" },
                { name: "Delobelle, P.", url: "https://pieter.ai/" },
                { name: "Bekker, J.", url: "https://jessa.github.io/" }
            ],
            year: 2023,
            venue: "In the ECML-PKDD 2023 International workshop on AI for Human Resources and Public Employment Services.",
            links: [
                { name: "Paper", url: "https://ai4hrpes.github.io/ecmlpkdd2023/papers/ai4hrpes2023_paper_152.pdf", icon: "fa-regular fa-file-pdf" }
            ]
        },
        {
            title: "Tensorised Probabilistic Inference for Neural Probabilistic Logic Programming",
            authors: [
                { name: "De Smet, L." },
                { name: "Manhaeve, R.", url: "https://people.cs.kuleuven.be/~robin.manhaeve/" },
                { name: "Marra, G.", url: "https://www.giuseppemarra.com/" },
                { name: "Zuidberg Dos Martires, P.", url: "https://pedrozudo.github.io/" }
            ],
            year: 2022,
            venue: "In the 5th Workshop on Tractable Probabilistic Modeling (TPM).",
            links: [
                { name: "Paper", url: "https://openreview.net/pdf?id=6Kpbq2Y2IK6", icon: "fa-regular fa-file-pdf" }
            ]
        }
    ]
};
