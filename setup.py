from setuptools import setup, find_packages

setup(
    name='frtg',
    version="0.1",
    author='GEANT',
    author_email='swd@geant.org',
    description='Flask/React Twitter grid',
    url=('todo'),
    packages=find_packages(),
    install_requires=[
        'flask',
        'pika',
        'jsonschema'
    ],
    include_package_data=True,
)

