from setuptools import setup, find_packages

with open("README.md") as f:
    long_description = f.read()

setup(
    name='frtg',
    version="0.5.3",
    author='Erik Reid',
    author_email='nobody@nowhere.org',
    description='Flask/React Twitter grid',
    long_description=long_description,
    long_description_content_type='text/markdown',
    url='https://github.com/susrik/frtg',
    packages=find_packages(),
    install_requires=[
        'flask',
        'pika',
        'jsonschema',
        'twython'
    ],
    include_package_data=True,
    classifiers=[
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Development Status :: 4 - Beta'
    ],
    python_requires='>=3.5'
)

