from setuptools import setup, find_packages

setup(
    name='frtg',
    version="0.4.0",
    author='GEANT',
    author_email='swd@geant.org',
    description='Flask/React Twitter grid',
    url=('todo'),
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
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Development Status :: 4 - Beta'
    ],
    python_requires='>=3.6'
)

